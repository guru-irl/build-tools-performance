import React from 'react';
const LABEL_24986 = 'component_24986';
export function Component24986({ value = 24986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24986, 'data-value': derived.doubled }, children);
}
export default Component24986;
