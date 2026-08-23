import React from 'react';
const LABEL_26304 = 'component_26304';
export function Component26304({ value = 26304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26304, 'data-value': derived.doubled }, children);
}
export default Component26304;
