import React from 'react';
const LABEL_43225 = 'component_43225';
export function Component43225({ value = 43225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43225, 'data-value': derived.doubled }, children);
}
export default Component43225;
