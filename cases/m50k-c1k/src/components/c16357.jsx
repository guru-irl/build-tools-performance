import React from 'react';
const LABEL_16357 = 'component_16357';
export function Component16357({ value = 16357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16357, 'data-value': derived.doubled }, children);
}
export default Component16357;
