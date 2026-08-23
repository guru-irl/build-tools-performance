import React from 'react';
const LABEL_6589 = 'component_6589';
export function Component6589({ value = 6589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6589, 'data-value': derived.doubled }, children);
}
export default Component6589;
