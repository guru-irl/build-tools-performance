import React from 'react';
const LABEL_45102 = 'component_45102';
export function Component45102({ value = 45102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45102, 'data-value': derived.doubled }, children);
}
export default Component45102;
