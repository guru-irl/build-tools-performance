import React from 'react';
const LABEL_11952 = 'component_11952';
export function Component11952({ value = 11952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11952, 'data-value': derived.doubled }, children);
}
export default Component11952;
