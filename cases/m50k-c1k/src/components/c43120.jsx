import React from 'react';
const LABEL_43120 = 'component_43120';
export function Component43120({ value = 43120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43120, 'data-value': derived.doubled }, children);
}
export default Component43120;
