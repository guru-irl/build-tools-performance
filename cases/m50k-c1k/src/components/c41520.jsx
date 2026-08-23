import React from 'react';
const LABEL_41520 = 'component_41520';
export function Component41520({ value = 41520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41520, 'data-value': derived.doubled }, children);
}
export default Component41520;
