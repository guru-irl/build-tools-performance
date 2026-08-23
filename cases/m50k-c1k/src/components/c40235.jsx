import React from 'react';
const LABEL_40235 = 'component_40235';
export function Component40235({ value = 40235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40235, 'data-value': derived.doubled }, children);
}
export default Component40235;
