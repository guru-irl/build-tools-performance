import React from 'react';
const LABEL_22681 = 'component_22681';
export function Component22681({ value = 22681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22681, 'data-value': derived.doubled }, children);
}
export default Component22681;
