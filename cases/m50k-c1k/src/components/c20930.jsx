import React from 'react';
const LABEL_20930 = 'component_20930';
export function Component20930({ value = 20930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20930, 'data-value': derived.doubled }, children);
}
export default Component20930;
