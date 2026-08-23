import React from 'react';
const LABEL_20872 = 'component_20872';
export function Component20872({ value = 20872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20872, 'data-value': derived.doubled }, children);
}
export default Component20872;
