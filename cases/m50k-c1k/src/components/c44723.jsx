import React from 'react';
const LABEL_44723 = 'component_44723';
export function Component44723({ value = 44723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44723, 'data-value': derived.doubled }, children);
}
export default Component44723;
