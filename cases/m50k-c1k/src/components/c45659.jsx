import React from 'react';
const LABEL_45659 = 'component_45659';
export function Component45659({ value = 45659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45659, 'data-value': derived.doubled }, children);
}
export default Component45659;
