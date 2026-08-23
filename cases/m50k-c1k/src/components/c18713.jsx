import React from 'react';
const LABEL_18713 = 'component_18713';
export function Component18713({ value = 18713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18713, 'data-value': derived.doubled }, children);
}
export default Component18713;
