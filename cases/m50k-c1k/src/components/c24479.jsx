import React from 'react';
const LABEL_24479 = 'component_24479';
export function Component24479({ value = 24479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24479, 'data-value': derived.doubled }, children);
}
export default Component24479;
