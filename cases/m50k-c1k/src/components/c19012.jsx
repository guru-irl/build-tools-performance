import React from 'react';
const LABEL_19012 = 'component_19012';
export function Component19012({ value = 19012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19012, 'data-value': derived.doubled }, children);
}
export default Component19012;
