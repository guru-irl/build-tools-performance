import React from 'react';
const LABEL_44569 = 'component_44569';
export function Component44569({ value = 44569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44569, 'data-value': derived.doubled }, children);
}
export default Component44569;
