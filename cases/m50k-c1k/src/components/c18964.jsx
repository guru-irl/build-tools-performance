import React from 'react';
const LABEL_18964 = 'component_18964';
export function Component18964({ value = 18964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18964, 'data-value': derived.doubled }, children);
}
export default Component18964;
