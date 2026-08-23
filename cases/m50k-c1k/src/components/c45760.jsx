import React from 'react';
const LABEL_45760 = 'component_45760';
export function Component45760({ value = 45760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45760, 'data-value': derived.doubled }, children);
}
export default Component45760;
