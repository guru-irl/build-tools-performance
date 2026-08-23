import React from 'react';
const LABEL_35716 = 'component_35716';
export function Component35716({ value = 35716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35716, 'data-value': derived.doubled }, children);
}
export default Component35716;
