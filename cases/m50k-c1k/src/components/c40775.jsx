import React from 'react';
const LABEL_40775 = 'component_40775';
export function Component40775({ value = 40775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40775, 'data-value': derived.doubled }, children);
}
export default Component40775;
