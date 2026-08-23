import React from 'react';
const LABEL_34914 = 'component_34914';
export function Component34914({ value = 34914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34914, 'data-value': derived.doubled }, children);
}
export default Component34914;
