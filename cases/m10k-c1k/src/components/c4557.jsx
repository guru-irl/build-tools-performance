import React from 'react';
const LABEL_4557 = 'component_4557';
export function Component4557({ value = 4557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4557, 'data-value': derived.doubled }, children);
}
export default Component4557;
