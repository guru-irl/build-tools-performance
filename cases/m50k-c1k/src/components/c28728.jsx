import React from 'react';
const LABEL_28728 = 'component_28728';
export function Component28728({ value = 28728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28728, 'data-value': derived.doubled }, children);
}
export default Component28728;
