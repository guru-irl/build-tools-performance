import React from 'react';
const LABEL_5699 = 'component_5699';
export function Component5699({ value = 5699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5699, 'data-value': derived.doubled }, children);
}
export default Component5699;
