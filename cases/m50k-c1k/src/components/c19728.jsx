import React from 'react';
const LABEL_19728 = 'component_19728';
export function Component19728({ value = 19728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19728, 'data-value': derived.doubled }, children);
}
export default Component19728;
