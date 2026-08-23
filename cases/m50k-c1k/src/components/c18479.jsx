import React from 'react';
const LABEL_18479 = 'component_18479';
export function Component18479({ value = 18479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18479, 'data-value': derived.doubled }, children);
}
export default Component18479;
