import React from 'react';
const LABEL_20217 = 'component_20217';
export function Component20217({ value = 20217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20217, 'data-value': derived.doubled }, children);
}
export default Component20217;
