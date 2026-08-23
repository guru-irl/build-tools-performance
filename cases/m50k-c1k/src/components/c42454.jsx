import React from 'react';
const LABEL_42454 = 'component_42454';
export function Component42454({ value = 42454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42454, 'data-value': derived.doubled }, children);
}
export default Component42454;
