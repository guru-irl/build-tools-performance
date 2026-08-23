import React from 'react';
const LABEL_25024 = 'component_25024';
export function Component25024({ value = 25024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25024, 'data-value': derived.doubled }, children);
}
export default Component25024;
