import React from 'react';
const LABEL_34795 = 'component_34795';
export function Component34795({ value = 34795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34795, 'data-value': derived.doubled }, children);
}
export default Component34795;
