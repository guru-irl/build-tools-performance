import React from 'react';
const LABEL_26423 = 'component_26423';
export function Component26423({ value = 26423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26423, 'data-value': derived.doubled }, children);
}
export default Component26423;
