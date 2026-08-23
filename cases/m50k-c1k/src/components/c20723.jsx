import React from 'react';
const LABEL_20723 = 'component_20723';
export function Component20723({ value = 20723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20723, 'data-value': derived.doubled }, children);
}
export default Component20723;
