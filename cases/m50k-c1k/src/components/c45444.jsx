import React from 'react';
const LABEL_45444 = 'component_45444';
export function Component45444({ value = 45444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45444, 'data-value': derived.doubled }, children);
}
export default Component45444;
