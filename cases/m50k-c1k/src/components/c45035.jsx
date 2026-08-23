import React from 'react';
const LABEL_45035 = 'component_45035';
export function Component45035({ value = 45035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45035, 'data-value': derived.doubled }, children);
}
export default Component45035;
