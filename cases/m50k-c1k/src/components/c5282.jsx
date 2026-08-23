import React from 'react';
const LABEL_5282 = 'component_5282';
export function Component5282({ value = 5282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5282, 'data-value': derived.doubled }, children);
}
export default Component5282;
