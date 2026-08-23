import React from 'react';
const LABEL_10036 = 'component_10036';
export function Component10036({ value = 10036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10036, 'data-value': derived.doubled }, children);
}
export default Component10036;
