import React from 'react';
const LABEL_24587 = 'component_24587';
export function Component24587({ value = 24587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24587, 'data-value': derived.doubled }, children);
}
export default Component24587;
