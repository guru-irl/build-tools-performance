import React from 'react';
const LABEL_34943 = 'component_34943';
export function Component34943({ value = 34943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34943, 'data-value': derived.doubled }, children);
}
export default Component34943;
