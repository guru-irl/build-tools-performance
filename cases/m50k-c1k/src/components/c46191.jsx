import React from 'react';
const LABEL_46191 = 'component_46191';
export function Component46191({ value = 46191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46191, 'data-value': derived.doubled }, children);
}
export default Component46191;
