import React from 'react';
const LABEL_11282 = 'component_11282';
export function Component11282({ value = 11282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11282, 'data-value': derived.doubled }, children);
}
export default Component11282;
