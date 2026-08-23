import React from 'react';
const LABEL_35074 = 'component_35074';
export function Component35074({ value = 35074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35074, 'data-value': derived.doubled }, children);
}
export default Component35074;
