import React from 'react';
const LABEL_4873 = 'component_4873';
export function Component4873({ value = 4873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4873, 'data-value': derived.doubled }, children);
}
export default Component4873;
