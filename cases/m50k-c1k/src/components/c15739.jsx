import React from 'react';
const LABEL_15739 = 'component_15739';
export function Component15739({ value = 15739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15739, 'data-value': derived.doubled }, children);
}
export default Component15739;
