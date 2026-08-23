import React from 'react';
const LABEL_15998 = 'component_15998';
export function Component15998({ value = 15998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15998, 'data-value': derived.doubled }, children);
}
export default Component15998;
