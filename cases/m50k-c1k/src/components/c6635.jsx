import React from 'react';
const LABEL_6635 = 'component_6635';
export function Component6635({ value = 6635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6635, 'data-value': derived.doubled }, children);
}
export default Component6635;
