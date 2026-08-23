import React from 'react';
const LABEL_20770 = 'component_20770';
export function Component20770({ value = 20770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20770, 'data-value': derived.doubled }, children);
}
export default Component20770;
