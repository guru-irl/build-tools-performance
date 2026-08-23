import React from 'react';
const LABEL_35930 = 'component_35930';
export function Component35930({ value = 35930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35930, 'data-value': derived.doubled }, children);
}
export default Component35930;
