import React from 'react';
const LABEL_1322 = 'component_1322';
export function Component1322({ value = 1322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1322, 'data-value': derived.doubled }, children);
}
export default Component1322;
