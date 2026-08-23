import React from 'react';
const LABEL_28175 = 'component_28175';
export function Component28175({ value = 28175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28175, 'data-value': derived.doubled }, children);
}
export default Component28175;
