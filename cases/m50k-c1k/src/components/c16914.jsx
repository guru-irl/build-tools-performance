import React from 'react';
const LABEL_16914 = 'component_16914';
export function Component16914({ value = 16914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16914, 'data-value': derived.doubled }, children);
}
export default Component16914;
