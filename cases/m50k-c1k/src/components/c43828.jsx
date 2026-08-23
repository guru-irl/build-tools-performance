import React from 'react';
const LABEL_43828 = 'component_43828';
export function Component43828({ value = 43828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43828, 'data-value': derived.doubled }, children);
}
export default Component43828;
