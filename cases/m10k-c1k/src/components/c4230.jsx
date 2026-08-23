import React from 'react';
const LABEL_4230 = 'component_4230';
export function Component4230({ value = 4230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4230, 'data-value': derived.doubled }, children);
}
export default Component4230;
