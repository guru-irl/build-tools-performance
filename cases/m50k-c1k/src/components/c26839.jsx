import React from 'react';
const LABEL_26839 = 'component_26839';
export function Component26839({ value = 26839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26839, 'data-value': derived.doubled }, children);
}
export default Component26839;
