import React from 'react';
const LABEL_16140 = 'component_16140';
export function Component16140({ value = 16140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16140, 'data-value': derived.doubled }, children);
}
export default Component16140;
